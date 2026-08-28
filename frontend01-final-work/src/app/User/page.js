"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

const USERS_URL = "https://api.itdev.cmtc.ac.th/users";

export default function UsersPage() {
  const router = useRouter();

  const [isAuth, setIsAuth] = useState(false);
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // ==========================================
  // ดึงข้อมูล Users
  // ==========================================
  const fetchUsers = async () => {
    try {
      const res = await fetch(USERS_URL);

      if (!res.ok) {
        if (res.status === 404) {
          throw new Error("ไม่พบข้อมูลผู้ใช้งาน (404 Not Found)");
        }

        if (res.status === 500) {
          throw new Error("เซิร์ฟเวอร์มีปัญหา (500 Internal Server Error)");
        }

        throw new Error(
          `เกิดข้อผิดพลาดจากการเชื่อมต่อ (Status: ${res.status})`
        );
      }

      const data = await res.json();

      if (Array.isArray(data)) {
        setUsers(data);
      } else if (Array.isArray(data.users)) {
        setUsers(data.users);
      } else if (Array.isArray(data.data)) {
        setUsers(data.data);
      } else {
        setUsers([]);
      }
    } catch (error) {
      console.error("เกิดข้อผิดพลาด:", error.message);

      setUsers([]);

      await Swal.fire({
        icon: "error",
        title: "โหลดข้อมูลไม่สำเร็จ",
        text: error.message,
        confirmButtonText: "ตกลง",
      });
    } finally {
      setIsLoading(false);
    }
  };

  // ==========================================
  // ตรวจสอบ Login
  // ==========================================
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      setIsAuth(false);
      setIsLoading(false);

      router.push("/pagelogin");
      return;
    }

    setIsAuth(true);
    fetchUsers();
  }, []);

  // ==========================================
  // แก้ไข User
  // ==========================================
  const handleEdit = async (user) => {
    const result = await Swal.fire({
      title: "แก้ไขข้อมูลผู้ใช้งาน",

      html: `
        <input
          id="firstname"
          class="swal2-input"
          placeholder="ชื่อ"
          value="${user.firstname ?? ""}"
        />

        <input
          id="lastname"
          class="swal2-input"
          placeholder="นามสกุล"
          value="${user.lastname ?? ""}"
        />

        <input
          id="username"
          class="swal2-input"
          placeholder="Username"
          value="${user.username ?? ""}"
        />
      `,

      showCancelButton: true,
      confirmButtonText: "บันทึก",
      cancelButtonText: "ยกเลิก",
      confirmButtonColor: "#2563eb",

      preConfirm: () => {
        const firstname =
          document.getElementById("firstname").value.trim();

        const lastname =
          document.getElementById("lastname").value.trim();

        const username =
          document.getElementById("username").value.trim();

        if (!firstname || !lastname || !username) {
          Swal.showValidationMessage("กรุณากรอกข้อมูลให้ครบ");
          return false;
        }

        return {
          firstname,
          lastname,
          username,
        };
      },
    });

    if (!result.isConfirmed) {
      return;
    }

    try {
      const res = await fetch(`${USERS_URL}/${user.id}`, {
        method: "PUT",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(result.value),
      });

      if (!res.ok) {
        throw new Error(
          `ไม่สามารถแก้ไขข้อมูลได้ (Status: ${res.status})`
        );
      }

      setUsers((prevUsers) =>
        prevUsers.map((item) =>
          item.id === user.id
            ? {
                ...item,
                ...result.value,
              }
            : item
        )
      );

      await Swal.fire({
        icon: "success",
        title: "แก้ไขสำเร็จ",
        text: "แก้ไขข้อมูลผู้ใช้งานเรียบร้อยแล้ว",
        confirmButtonText: "ตกลง",
      });
    } catch (error) {
      console.error("Edit Error:", error);

      await Swal.fire({
        icon: "error",
        title: "แก้ไขข้อมูลไม่สำเร็จ",
        text: error.message,
        confirmButtonText: "ตกลง",
      });
    }
  };

  // ==========================================
  // ลบ User
  // ==========================================
  const handleDelete = async (user) => {
    const result = await Swal.fire({
      icon: "warning",

      title: "ต้องการลบผู้ใช้งานหรือไม่?",

      text: `ต้องการลบ ${user.firstname ?? ""} ${
        user.lastname ?? ""
      } หรือไม่`,

      showCancelButton: true,

      confirmButtonText: "ลบ",

      cancelButtonText: "ยกเลิก",

      confirmButtonColor: "#ef4444",
    });

    if (!result.isConfirmed) {
      return;
    }

    try {
      const res = await fetch(`${USERS_URL}/${user.id}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        throw new Error(
          `ไม่สามารถลบผู้ใช้งานได้ (Status: ${res.status})`
        );
      }

      setUsers((prevUsers) =>
        prevUsers.filter((item) => item.id !== user.id)
      );

      await Swal.fire({
        icon: "success",
        title: "ลบสำเร็จ",
        text: "ลบข้อมูลผู้ใช้งานเรียบร้อยแล้ว",
        confirmButtonText: "ตกลง",
      });
    } catch (error) {
      console.error("Delete Error:", error);

      await Swal.fire({
        icon: "error",
        title: "ลบข้อมูลไม่สำเร็จ",
        text: error.message,
        confirmButtonText: "ตกลง",
      });
    }
  };

  // ==========================================
  // Logout
  // ==========================================
  const handleLogout = async () => {
    const result = await Swal.fire({
      icon: "question",
      title: "ออกจากระบบ?",
      text: "คุณต้องการออกจากระบบหรือไม่",
      showCancelButton: true,
      confirmButtonText: "ออกจากระบบ",
      cancelButtonText: "ยกเลิก",
      confirmButtonColor: "#ef4444",
    });

    if (!result.isConfirmed) {
      return;
    }

    localStorage.removeItem("token");
    localStorage.removeItem("user");

    setIsAuth(false);

    router.replace("/pagelogin");
  };

  // ==========================================
  // ยังไม่ Login
  // ==========================================
  if (!isAuth) {
    return null;
  }

  // ==========================================
  // Loading
  // ==========================================
  if (isLoading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-gray-100">
        <div className="text-center">
          <div className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-4 border-blue-200 border-t-blue-600" />

          <p className="text-gray-600">
            กำลังโหลดข้อมูลผู้ใช้งาน...
          </p>
        </div>
      </main>
    );
  }

  // ==========================================
  // User Page
  // ==========================================
  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-6 flex flex-col gap-4 rounded-2xl bg-white p-6 shadow md:flex-row md:items-center md:justify-between">

          <div>
            <h1 className="text-2xl font-bold text-gray-800">
              User Management
            </h1>

            <p className="mt-1 text-sm text-gray-500">
              รายการสมาชิกในระบบ
            </p>
          </div>

          <button
            onClick={handleLogout}
            className="rounded-xl bg-red-500 px-5 py-2.5 font-semibold text-white transition hover:bg-red-600"
          >
            Logout
          </button>

        </div>

        {/* จำนวน User */}
        <div className="mb-6 rounded-2xl bg-white p-6 shadow">

          <p className="text-sm text-gray-500">
            จำนวนสมาชิก
          </p>

          <p className="mt-1 text-3xl font-bold text-blue-600">
            {users.length}
          </p>

        </div>

        {/* User List */}
        <div className="overflow-hidden rounded-2xl bg-white shadow">

          <div className="overflow-x-auto">

            <table className="w-full">

              <thead className="bg-blue-600 text-white">

                <tr>

                  <th className="px-5 py-4 text-left">
                    ID
                  </th>

                  <th className="px-5 py-4 text-left">
                    ชื่อ
                  </th>

                  <th className="px-5 py-4 text-left">
                    นามสกุล
                  </th>

                  <th className="px-5 py-4 text-left">
                    Username
                  </th>

                  <th className="px-5 py-4 text-left">
                    สถานะ
                  </th>

                  <th className="px-5 py-4 text-center">
                    จัดการ
                  </th>

                </tr>

              </thead>

              <tbody>

                {users.length === 0 ? (

                  <tr>
                    <td
                      colSpan="6"
                      className="px-5 py-10 text-center text-gray-500"
                    >
                      ไม่พบข้อมูลผู้ใช้งาน
                    </td>
                  </tr>

                ) : (

                  users.map((user, index) => (

                    <tr
                      key={user.id ?? index}
                      className="border-b transition hover:bg-blue-50"
                    >

                      <td className="px-5 py-4 text-gray-600">
                        {user.id ?? "-"}
                      </td>

                      <td className="px-5 py-4 font-semibold text-gray-800">
                        {user.firstname ?? "-"}
                      </td>

                      <td className="px-5 py-4 text-gray-700">
                        {user.lastname ?? "-"}
                      </td>

                      <td className="px-5 py-4 text-gray-700">
                        {user.username ?? "-"}
                      </td>

                      {/* สถานะ */}
                      <td className="px-5 py-4">

                        <span className="inline-flex items-center gap-2 rounded-full bg-green-100 px-3 py-1.5 text-xs font-semibold text-green-700">

                          <span className="h-2 w-2 rounded-full bg-green-500" />

                          Active

                        </span>

                      </td>

                      {/* จัดการ */}
                      <td className="px-5 py-4">

                        <div className="flex justify-center gap-2">

                          {/* แก้ไข */}
                          <button
                            onClick={() => handleEdit(user)}
                            className="rounded-lg bg-blue-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-600"
                          >
                            แก้ไข
                          </button>

                          {/* ลบ */}
                          <button
                            onClick={() => handleDelete(user)}
                            className="rounded-lg bg-red-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-600"
                          >
                            ลบ
                          </button>

                        </div>

                      </td>

                    </tr>

                  ))

                )}

              </tbody>

            </table>

          </div>

        </div>

      </div>
    </main>
  );
}