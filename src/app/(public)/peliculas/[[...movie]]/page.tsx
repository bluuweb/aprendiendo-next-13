interface Props {
  params: {
    // movie: string[];
    movie: Array<string>;
  };
}

const Movie = ({ params }: Props) => {
  console.log(params);
  return <div>Movie</div>;
};
export default Movie;
