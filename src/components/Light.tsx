 
 type Props = {
    /** some description */
    variant?:'green' | 'yellow' |'red'
 }
 /** some comment about my light components */
 const Light = ({variant='green'}: Props) => {
   return (
     <div 
    style={{
    background:variant,
borderRadius: "50%",
width:20,height:20}}
     ></div>
   )
 }

 export default Light