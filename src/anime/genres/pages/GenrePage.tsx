// import { useFetch } from '@/hooks/useFetch';
import data from '../data/dataGenreAnime.json';

// interface Genre {
//   amount: number;
//   id: string;
//   title: string;
// }

export const GenrePage = () => {
  // const { data } = useFetch<Genre[]>('anime/genres');
  // console.log({ data });
  console.log(data);

  return (
    <>
      <h1>Lista de géneros de los animes</h1>
      <select name='Select Genres'>
        {data?.map((genre) => (
          <option key={genre.id} value={genre.title}>
            {genre.title}
          </option>
        ))}
      </select>
      <p></p>
    </>
  );
};
