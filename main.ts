//% color="#307554" icon="\uf7fb" weight = 10 blockGap = 8
//% block="Simplified"
//% groups='["Sprites", "Arrays"]'

namespace simplified {

    /**
     * Allows your sprite to jump only if it's currently on a floor
     */
    //% group=Sprites
    //% blockId=gravity_jump
    //% block="make $thisSprite=variables_get(mySprite) gravity jump" || with power $velo
    export function gravity_jump(thisSprite: Sprite, velo: number) {
        if (!velo){
            velo = 200;
        }
        if (thisSprite.isHittingTile(CollisionDirection.Bottom)) {
            thisSprite.vy = Math.abs(velo)
        }
    }


    /**
     * Randomly chooses one of the parameter images
     *
     * @param choice1 A choice to appear in the list of player choices
     * @param choice2 A choice to appear in the list of player choices
     * @param choice3 A choice to appear in the list of player choices
     * @param choice4 A choice to appear in the list of player choices
     * @param choice5 A choice to appear in the list of player choices
     */

    //% group=Arrays
    //% blockId=choose_random_from_array
    //% block="choose one of $choice1=screen_image_picker $choice2=screen_image_picker || $choice3=screen_image_picker $choice4=screen_image_picker $choice5=screen_image_picker"
    //% inlineInputMode=inline
    export function chooseRandomImage(choice1: Image, choice2: Image, choice3?: Image, choice4?: Image, choice5?: Image) {
        let myList = [choice1, choice2];
        if (choice3) myList.push(choice3);
        if (choice4) myList.push(choice4);
        if (choice5) myList.push(choice5);
        return myList._pickRandom();
    }
}


