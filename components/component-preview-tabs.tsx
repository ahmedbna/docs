'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { useTheme } from 'next-themes';

// iPhone Video Component (This remains unchanged)
function IPhoneVideoPreview({
  videoUrl,
  className,
}: {
  videoUrl: string;
  className?: string;
}) {
  const [mounted, setMounted] = React.useState(false);

  // Ensure component is mounted to avoid hydration mismatch
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className='flex items-center justify-center w-full h-full'>
        <div className='animate-pulse bg-background rounded-[2.5rem] w-[280px] h-[560px]' />
      </div>
    );
  }

  return (
    <div
      className={cn(
        'flex items-center justify-center w-full h-full',
        className
      )}
    >
      <div className='relative'>
        {/* iPhone Frame */}
        <div className='relative bg-black rounded-[2.5rem] p-2 shadow-2xl'>
          <div className='bg-white dark:bg-gray-900 rounded-[2rem] overflow-hidden relative'>
            {/* iPhone Notch */}
            <div className='absolute top-2 left-1/2 transform -translate-x-1/2 w-24 h-6.5 bg-black rounded-full z-10' />

            {/* Video Container */}
            <div className='relative w-[220px] h-[480px] overflow-hidden rounded-[2rem]'>
              {/* <div className='relative w-[264px] h-[480px] overflow-hidden rounded-[2rem]'> */}
              <video
                key={videoUrl} // Force re-render when video changes
                className='w-full h-full object-cover'
                autoPlay
                loop
                muted
                playsInline
                poster='' // You can add a poster image if needed
              >
                <source src={videoUrl} type='video/mp4' />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>

        {/* iPhone Home Indicator */}
        {/* <div className='absolute bottom-1 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gray-400 rounded-full' /> */}
      </div>
    </div>
  );
}

export function ComponentPreviewTabs({
  className,
  align = 'center',
  hideCode = false,
  preview,
  source,
  ...props
}: React.ComponentProps<'div'> & {
  align?: 'center' | 'start' | 'end';
  hideCode?: boolean;
  preview: {
    light: string;
    dark: string;
  };
  source: React.ReactNode;
}) {
  const { theme, systemTheme } = useTheme();

  // Determine which video to show based on theme
  const currentTheme = theme === 'system' ? systemTheme : theme;
  const videoUrl = currentTheme === 'dark' ? preview.dark : preview.light;

  return (
    <div
      className={cn('group relative mt-4 mb-12 flex flex-col gap-2', className)}
      {...props}
    >
      {/* Container for Preview and Code side-by-side */}
      <div className='w-full flex flex-col md:flex-row  md:items-stretch gap-2'>
        {/* Code Section */}
        <div
          data-slot='code'
          className='relative overflow-hidden flex-grow rounded-lg border bg-secondary **:[figure]:!m-0 **:[pre]:h-[480px]'
        >
          {source}
        </div>

        {/* Preview Section */}
        <div
          data-slot='preview'
          className={cn(
            'preview flex h-[480px] justify-center data-[align=center]:items-center data-[align=end]:items-end data-[align=start]:items-start'
          )}
        >
          <IPhoneVideoPreview videoUrl={videoUrl} />
        </div>
      </div>
    </div>
  );
}
