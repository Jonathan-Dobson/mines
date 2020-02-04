export default function classes(props) {
    let classes = ""
    for(let item in props){
        if(typeof props[item]==='boolean' && item!=='children'){
            classes += item + " "
        }
    }
    return classes.slice(0,classes.length-1)
};