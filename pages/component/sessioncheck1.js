import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function SessionCheck1 () {
  const router = useRouter();

  useEffect(() => {
    const session = sessionStorage.getItem('email');
    if (!session) {
      router.push('/signin1');
    }
  }, []);

  return null;
};


