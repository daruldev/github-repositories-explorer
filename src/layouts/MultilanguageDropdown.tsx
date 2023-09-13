import React from 'react';
import { Menu, Transition } from '@headlessui/react';
import { useTranslation } from 'react-i18next';
import { Fragment } from 'react';

import INAFlag from '../assets/ina-flag.png';
import USFlag from '../assets/us-flag.png';
import clsx from 'clsx';

const MultilanguageDropdown = () => {
  const { i18n, t } = useTranslation();
  return (
    <Menu
      as="div"
      className="relative mx-auto mr-4 inline-block pt-2 text-left text-gray-600"
    >
      <div>
        <Menu.Button
          data-dropdown-toggle="language-dropdown-menu"
          className={clsx(
            'block px-4 py-3 hover:bg-slate-100 active:bg-slate-50',
            'inline-flex cursor-pointer items-center justify-center rounded-lg text-sm font-medium',
            'border-none bg-transparent text-black shadow-none hover:bg-transparent',
            'hover:text-black active:bg-transparent',
          )}
        >
          <div className="h-6 w-6">
            <img
              src={t('gre.config.active_language') === 'id' ? INAFlag : USFlag}
              width={24}
              height={24}
              alt="USA"
              className="h-full w-full rounded-full object-cover"
            />
          </div>
          <span className="ml-2 hidden lg:block">
            {t('gre.config.language_text')}
          </span>
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          className={clsx(
            'absolute right-0 top-full mt-2 w-40 origin-top-right divide-y divide-gray-100',
            'rounded-xl bg-white py-2  text-gray-700 shadow-lg ring-1 ring-black',
            'ring-opacity-5 focus:outline-none lg:w-[15rem]',
          )}
        >
          <div className="text-sm">
            <Menu.Item data-testid={'language-dropdown-menu'} >
              <>
                <div>
                  <Menu.Button
                    onClick={() => {
                      i18n.changeLanguage('en');
                      localStorage.setItem('locale', 'en');
                    }}
                    data-dropdown-toggle="language-dropdown-menu"
                    className={clsx(
                      'block px-4 py-3 hover:bg-slate-100 active:bg-slate-50',
                      'inline-flex cursor-pointer items-center justify-center rounded-lg text-sm font-medium',
                      'border-none bg-transparent text-black shadow-none hover:bg-transparent',
                      'hover:text-black active:bg-transparent',
                    )}
                  >
                    <div className="h-6 w-6">
                      <img
                        src={USFlag}
                        width={24}
                        height={24}
                        alt="USA"
                        className="h-full w-full rounded-full object-cover"
                      />
                    </div>
                    <span className="ml-2">English (US)</span>
                  </Menu.Button>
                </div>
                <div>
                  <Menu.Button
                    onClick={() => {
                      i18n.changeLanguage('id');
                      localStorage.setItem('locale', 'id');
                    }}
                    data-dropdown-toggle="language-dropdown-menu"
                    className={clsx(
                      'px-4 py-3 hover:bg-slate-100 active:bg-slate-50 inline-flex cursor-pointer',
                      'items-center justify-center rounded-lg text-sm font-medium border-none',
                      'bg-transparent text-black shadow-none hover:bg-transparent',
                      'hover:text-black active:bg-transparent',
                    )}
                  >
                    <div className="h-6 w-6">
                      <img
                        src={INAFlag}
                        width={24}
                        height={24}
                        alt="USA"
                        className="h-full w-full rounded-full object-cover"
                      />
                    </div>
                    <span className="ml-2">Indonesia</span>
                  </Menu.Button>
                </div>
              </>
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default MultilanguageDropdown;
