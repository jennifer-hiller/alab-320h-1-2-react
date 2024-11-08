/* eslint-disable react/prop-types */
export default function Article(props) {
  return (
    <article>
      <h4>{props.date}</h4>
      <h3>{props.title}</h3>
      <img src={`/${props.imgSrc}.jpg`} alt="" />
      <p>{props.content}</p>
      <h5>
        <a href="">Continues...</a>
      </h5>
    </article>
  );
}
