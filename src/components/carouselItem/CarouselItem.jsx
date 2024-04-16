import style from "./carouselItem.module.css"
function CarouselItem(props){
    return(
        <div className={style.container}>
            <img className={style.cover} src={props.data.img} alt="cover" />
            <p className={style.name}>{props.data.name}</p>
        </div>
    );
}

export default CarouselItem;