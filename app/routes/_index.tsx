import type { MetaFunction } from "@remix-run/node";
import NavBar from "../components/NavBar";  // 匯入NavBar組件

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="flex h-screen">
      <NavBar />  {/* 左欄導航 */}
      <div className="flex-1 p-4">  {/* 右欄內容 */}
        <header className="flex flex-col items-center gap-9">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
            Welcome to Remix
          </h1>
          <div className="h-[144px] w-[434px]">
            <img
              src="/logo-light.png"
              alt="Remix"
              className="block w-full dark:hidden"
            />
            <img
              src="/logo-dark.png"
              alt="Remix"
              className="hidden w-full dark:block"
            />
          </div>
        </header>
        {/* 這裡可以添加更多內容或路由切換 */}
      </div>
    </div>
  );
}

  // 移除未使用的resources變數
