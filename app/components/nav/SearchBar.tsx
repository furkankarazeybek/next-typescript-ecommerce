'use client';

import { useRouter } from 'next/navigation';
import queryString from 'query-string';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { useEffect } from 'react';

const SearchBar = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors }
  } = useForm<FieldValues>({
    defaultValues: {
      searchTerm: ''
    }
  });

  

  const onInputChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value;

    // İsterseniz burada bir debounce mekanizması ekleyebilirsiniz

    const url = queryString.stringifyUrl(
      {
        url: '/',
        query: {
          searchTerm
        }
      },
      { skipNull: true }
    );

    console.log(url);
    router.push(url);
  };

  useEffect(() => {
    // Component ilk render olduğunda çalışacak
    // Eğer sadece ilk renderda çalışmasını istemiyorsanız, dependencies listesini boş bırakabilirsiniz.
    const searchTermRegistration = register('searchTerm');
    onInputChange({ target: { value: searchTermRegistration } } as any);
  }, [register]);

  return (
    <div className="flex items-center">
  <input
    {...register('searchTerm')}
    autoComplete="off"
    type="text"
    placeholder="Ürün Ara.."
    className="p-2 border border-gray-300 rounded-1-md focus:outline-none focus:border-[0.5px] focus:border-slate-500 w-full md:w-80 "
    onChange={(e) => {
      setValue('searchTerm', e.target.value);
      onInputChange(e);
    }}
  />
  <button
    onClick={() => {}}
    className="bg-slate-700 hover:opacity-80 text-white py-2 px-4 md:h-10 md:text-sm rounded-r-md"
    >
  Ara
  </button>
</div>

  
  );
};

export default SearchBar;
