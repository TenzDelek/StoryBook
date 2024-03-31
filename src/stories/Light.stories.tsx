import type { Meta,StoryObj } from "@storybook/react";

import Light from "../components/Light";
 const meta :Meta<typeof Light>={
    component:Light,
    title:"Example/Light", //if you write Example/ it will go in that dir
    tags:['autodocs'], //create documentation
    argTypes:{ //ways to document the further props
    variant:{
        control:{type:'select'},//can be radio also
        options:['green','yellow','red']
    }

    }
}

export default meta

type Story =StoryObj <typeof meta>;

/**thats the base red one */ 
export const Base:Story ={
    args:{
        variant:'red'
    }
}
/**thats the yellow one */
export const Yellow:Story ={
    args:{
        variant:'yellow'
    }
}
/**thats the gteen one */
export const Green:Story ={
    args:{
        variant:'green'
    }
}
/**thats the base main one */
export const Another:Story={

    render:(args) => <div style={{
        display:'flex',
        background:'gray',
        flexDirection:'column',
        gap:10,
        border:'2px solid black',
        width: "max-content",
        padding:10
    }}>
        <Light variant="red" />
        <Light variant="yellow" />
        <Light {...args} />
    </div>

}