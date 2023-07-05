import { Star } from "phosphor-react";

interface Istar{
    isActive: boolean;
    onClick: () => void;
}

export function FeedbackStar(props: Istar){
    return( 
        <button onClick={props.onClick}>
            <Star size={30} weight="fill" color={props.isActive ? "orange" : "#ccc"}/>
        </button>
    )
}