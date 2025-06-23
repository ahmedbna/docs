import { Loader2Icon } from 'lucide-react';

import { Button } from '@/registry/components/ui/button';

export default function ButtonLoading() {
  return (
    <Button size='sm' disabled>
      <Loader2Icon className='animate-spin' />
      Please wait
    </Button>
  );
}
