import { useEffect } from 'react';

export default function MyComponent() {
  useEffect(() => {
    try {
      const currentPath: string = window.location.pathname;
      console.log('Current Path:', currentPath);
    } catch (error) {
      console.error('Error in getUrlPath', error);
    }
  }, []); // useEffect sadece bir kere çalışsın diye boş bir dependency array kullanıyoruz


}
