import { useParams } from 'react-router-dom';

export const AnimePage = () => {
  const id = useParams();
  console.log(id);
  return <div>AnimePage</div>;
};
