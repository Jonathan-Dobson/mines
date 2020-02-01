export default function classes(props) {
    let classes = ""
    for(let item in props){
        if(item!=="children" && item!=="style"){classes += " " + item}
    }
    return classes
};

