import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import data from '../../anime/genres/data/dataGenreAnime.json';
import dataManga from '../../manga/genres/data/dataGenreManga.json';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/theme/ModeToggle';
import { Input } from '@/components/ui/input';

const animeGenres = data.map((genre) => genre.title);
const mangaGenres = dataManga.map((genre) => genre.title);

const FormSchema = z.object({
  querySearch: z.string().min(2, {
    message: 'Search query must be at least 2 characters.',
  }),
  selectAnime: z.string().refine((value) => animeGenres.includes(value), {
    message: 'Please select an anime genre.',
  }),
  selectManga: z.string().refine((value) => mangaGenres.includes(value), {
    message: 'Please select an anime genre.',
  }),
});

export const Header = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      querySearch: '',
      selectAnime: '',
      selectManga: '',
    },
  });

  const onSubmit: (data: z.infer<typeof FormSchema>) => void = (data) => {
    console.log(data);
  };

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='w-full flex gap-6 items-center my-8 justify-between'
        >
          <FormField
            control={form.control}
            name='querySearch'
            render={({ field }) => (
              <FormItem>
                <Input type='text' placeholder='search...' {...field} />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='selectManga'
            render={({ field }) => (
              <FormItem>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className='w-[180px]'>
                      <SelectValue placeholder='Select a anime genre' />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectGroup>
                      {dataManga?.map((genre) => (
                        <SelectItem key={genre.id} value={genre.title}>
                          {genre.title}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='selectAnime'
            render={({ field }) => (
              <FormItem>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className='w-[180px]'>
                      <SelectValue placeholder='Select a anime genre' />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectGroup>
                      {data.map((genre) => (
                        <SelectItem key={genre.id} value={genre.title}>
                          {genre.title}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />
          <Button type='submit'>Buscar</Button>
        </form>
      </Form>
      <ModeToggle />
    </>
  );
};
