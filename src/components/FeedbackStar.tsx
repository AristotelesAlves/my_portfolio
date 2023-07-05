import { Star } from "phosphor-react";

interface Istar{
    isActive: boolean;
    button: boolean;
    onClick: () => void;
}

export function FeedbackStar(props: Istar){
    return( 
        <>
            {props.button ? 
                <button onClick={props.onClick}>
                    <Star size={30} weight="fill" color={props.isActive ? "orange" : "#ccc"}/>
                </button>
                :
                <div>
                    <Star size={20} weight="fill" color={props.isActive ? "orange" : "#ccc"}/>
                </div>
            }
        </>      
    )
}