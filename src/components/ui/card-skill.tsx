
interface Iprops {
    title: string,
    url_img: string
    text: string
    left: boolean
}


export default function CardSkill(props: Iprops) {
  return (
    <div className={`flex  items-center gap-2 justify-center text-white flex-wrap-reverse ${props.left ? 'md:flex-row-reverse' : null}`}>
      <div className="flex flex-col gap-2 mb-20 md:items-start items-center ">
        <h2 className="text-3xl font-semibold text-green-400">{props.title}</h2>
        <p className="max-w-[600px] md:w-full w-[400px] text-lg text-gray-400">
          {props.text}
        </p>
      </div>
      <figure>
        <img src={props.url_img} alt="front" className="max-w-[600px] w-full" />
      </figure>
    </div>
  );
}
