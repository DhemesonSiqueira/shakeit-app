function MovieCard ({movie}) {
  return (
    <p key={movie.id} className="text-white">{movie.title}</p>
  );
}

export default MovieCard;