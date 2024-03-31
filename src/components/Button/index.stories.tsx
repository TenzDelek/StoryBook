import type { Meta,StoryObj } from "@storybook/react";
import Button from '../Button/index'
const meta :Meta<typeof Button >=
{
    title: 'Components/Button',
    component:Button,
    parameters:{
        layout: 'centered'
    },
    tags:['autodocs']
}

export default meta

type Story =StoryObj <typeof meta>;

export const Default:Story ={
    args:{
        children:"CLick me"
    }
}