import { Popover } from "@headlessui/react";

export function Header() {
  return (
    <Popover className="relative bg-white">
      <>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <a href="#">
                <span>Central de acompanhamento de alagamentos</span>
              </a>
            </div>
          </div>
        </div>
      </>
    </Popover>
  );
}
