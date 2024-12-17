import data from '../data/dataGenreManga.json';

export const GenrePage = () => {
  console.log(data);
  return (
    <>
      <h1>Lista de géneros de Manga</h1>
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
