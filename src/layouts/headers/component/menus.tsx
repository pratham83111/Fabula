import React from "react";
import menu_data from "@/data/menu-data";
import Link from "next/link";

const Menus = () => {
  const storedData = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('islogin')as any) : null;

  // const storedData = JSON.parse(localStorage.getItem("islogin") as any);
  const isLogin = storedData ? storedData.isLogin : false;
  const filteredMenuData = isLogin ? menu_data : menu_data.filter(menu => menu.id !== 6 && menu.title !== 'Dashboard');

  return (
    <>
      {filteredMenuData &&filteredMenuData.map((menu) =>
        menu.link || menu.sub_menus ? (
          <li key={menu.id} className={`nav-item  ${menu.title === 'Dashboard' ? 'dashboard-menu' : ''}`}>
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-auto-close="outside"
              aria-expanded="false"
            >
              {menu.link ? (
                <Link href={menu.link} className="dropdown-item">
                  {menu.title}
                </Link>
              ) : (
                menu.title
              )}
            </a>
            {menu.sub_menus && (
              <ul className="dropdown-menu">
                {menu.sub_menus.map((s, i) => (
                  <li key={i}>
                    <Link href={s.link} className="dropdown-item">
                      <span>{s.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ) : menu.mega_menus ? (
          <li key={menu.id} className="nav-item dropdown mega-dropdown-sm">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
              aria-expanded="false"
            >
              {menu.title}
            </a>
            <ul className="dropdown-menu">
              <li className="row gx-1">
                {menu.mega_menus.map((m) => (
                  <div key={m.id} className="col-md-4">
                    <div className="menu-column">
                      <h6 className="mega-menu-title">{m.title}</h6>
                      <ul className="style-none mega-dropdown-list">
                        {m.sub_menus.map((ms, i) => (
                          <li key={i}>
                            <Link href={ms.link} className="dropdown-item">
                              <span>{ms.title}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>))}
              </li>
            </ul>
          </li>
        ) : (
          <li key={menu.id} className="nav-item">
            <Link className="nav-link" href={menu.link} role="button">
              {menu.title}
            </Link>
          </li>
        )
      )}
    </>
  );
};

export default Menus;