import Link from 'next/link';

import { siteConfig } from '@/lib/config';
import { GitHubLink } from '@/components/github-link';
import { Icons } from '@/components/icons';
import { MainNav } from '@/components/main-nav';
import { MobileNav } from '@/components/mobile-nav';
import { ModeSwitcher } from '@/components/mode-switcher';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

export function SiteHeader() {
  return (
    <header className='bg-background sticky top-0 z-50 w-full'>
      <div className='container-wrapper 3xl:fixed:px-0 px-6'>
        <div className='3xl:fixed:container flex h-(--header-height) items-center gap-2 **:data-[slot=separator]:!h-4'>
          <MobileNav
            // tree={pageTree}
            items={siteConfig.navItems}
            className='flex lg:hidden'
          />
          <Button
            asChild
            variant='ghost'
            size='icon'
            className='hidden size-8 lg:flex'
          >
            <Link href='/'>
              <Icons.logo className='size-5' />
              <span className='sr-only'>{siteConfig.name}</span>
            </Link>
          </Button>
          <MainNav items={siteConfig.navItems} className='hidden lg:flex' />
          <div className='ml-auto flex items-center gap-2 md:flex-1 md:justify-end'>
            {/* <div className='hidden w-full flex-1 md:flex md:w-auto md:flex-none'>
              <CommandMenu tree={pageTree} colors={colors} />
            </div>
            <Separator
              orientation='vertical'
              className='ml-2 hidden lg:block'
            /> */}
            <GitHubLink />
            <Separator orientation='vertical' />
            <ModeSwitcher />
          </div>
        </div>
      </div>
    </header>
  );
}
