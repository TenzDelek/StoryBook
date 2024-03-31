 
 type Props = {
    /** some description */
    variant?:'green' | 'yellow' |'red'
 }
 /** some comment about my light components */
 const Light = ({variant='green'}: Props) => {
   return (
     <div  className= {`bg-${variant}-400  rounded-3xl w-5 h-5 `}
     >hello</div>
   )
 }

 export default Light