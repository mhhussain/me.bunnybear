import {body} from '../bunnybear';

export default function getchannels() {
    body.getChannel().then((gift) => {
        console.log(gift)
    });
};