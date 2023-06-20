import React, { useState, useEffect } from 'react';
import { Wrapper, TextBox, ImageWrapper, Image, PutsellDesc, DisclaimerBox, VideoWrapper, TitleWrapper } from './SellPuts.styles';
import { DeviceSize } from "../Responsive";


export const SellPuts = () => {

    const [vidWidth, setVidWidth] = useState(window.innerWidth <= DeviceSize.tablet ? 300 : 600);
    const [vidHeight, setVidHeight] = useState(window.innerWidth <= DeviceSize.tablet ? 250 : 400);

    const handleResizeVideo = () => {
        setVidWidth(window.innerWidth <= DeviceSize.tablet ? 300 : 600);
        setVidHeight(window.innerWidth <= DeviceSize.tablet ? 250 : 400);
    }

    //called once on mount
    useEffect(() => {
        window.addEventListener("resize", handleResizeVideo);
        handleResizeVideo();

        //cleanup after resize
        return () => window.removeEventListener("resize", handleResizeVideo);
    }, []);

    return (
        <Wrapper>
            <DisclaimerBox>
                <h2>Disclaimer</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>

            </DisclaimerBox>
            <TitleWrapper>
                <h1>Selling Cash Covered Puts</h1>
            </TitleWrapper>
            <TextBox>
                <h3>What is selling a cash covered put?</h3>

                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean rutrum sapien quis velit sagittis, ut porttitor tortor pharetra. Vestibulum pellentesque est ipsum, non commodo lectus interdum id. Maecenas bibendum, arcu eu suscipit pharetra, quam ipsum finibus nibh, nec pulvinar nulla est eget ante. Ut eu orci id velit imperdiet cursus. Nam cursus augue eget odio fringilla tempus. Duis tincidunt rutrum viverra. Sed a vestibulum orci. Nunc nunc lacus, maximus sit amet ligula at, posuere scelerisque lorem. Donec sed tortor sem. Vestibulum consectetur facilisis neque, vitae dignissim dolor varius non.

                    Sed tempor odio at congue mattis. Sed lectus nibh, fringilla sed laoreet a, aliquam in purus. Nunc suscipit feugiat commodo. Etiam vel tellus in nibh mollis auctor ac sed tellus. Sed dignissim ipsum vel est commodo facilisis. Mauris blandit lectus vel mauris tempus vestibulum. Suspendisse vel eleifend neque, pharetra luctus urna. Quisque consequat, est et sollicitudin elementum, mauris tortor facilisis elit, a pharetra quam tortor vitae erat. Vestibulum ante sapien, sollicitudin vel aliquet nec, facilisis a erat. Suspendisse suscipit vehicula orci feugiat lacinia. Praesent luctus bibendum sapien. Phasellus convallis sed sem sed dignissim. Sed dapibus luctus urna, condimentum porta urna finibus facilisis. Aliquam lacus enim, malesuada et placerat tincidunt, maximus at quam.

                    Praesent sed iaculis ipsum. Duis non tellus eu libero dictum suscipit nec et metus. Aliquam erat volutpat. Nam id pulvinar ex. Donec rutrum, lectus et pulvinar vehicula, quam tellus suscipit est, quis pretium nibh elit quis diam. Aliquam non condimentum mi. Curabitur egestas sodales leo eu gravida. Cras non leo lobortis, viverra velit vel, rutrum nibh. Donec gravida et ipsum ut consectetur. Ut pretium iaculis tellus nec facilisis. Aenean condimentum, tellus quis interdum aliquet, odio metus tincidunt felis, ut vulputate erat quam sit amet risus. Proin fermentum faucibus nulla, vel ultrices metus mattis sed. Mauris condimentum enim sit amet mauris hendrerit, quis pharetra ipsum malesuada. Integer maximus feugiat velit vitae dapibus.

                    Aenean cursus orci tortor, sit amet suscipit justo aliquam vitae. Duis tempor libero eu sapien vehicula finibus. Curabitur elementum purus porta ex molestie maximus. Donec auctor sit amet purus at egestas. Maecenas pulvinar pellentesque volutpat. Maecenas at urna non orci ultrices ullamcorper. Suspendisse a lacinia lorem. Pellentesque efficitur odio dolor, et iaculis risus lacinia eget. Nulla vel nibh eu libero convallis ullamcorper. Donec rhoncus ultricies ullamcorper. Curabitur vel feugiat velit. Duis nec suscipit mi, ut bibendum diam. Suspendisse facilisis at felis quis facilisis. Nullam vitae blandit tortor, non condimentum erat. Vestibulum nunc tortor, suscipit vitae tempor quis, luctus quis metus.

                    Maecenas sed leo sollicitudin, mollis dui convallis, interdum elit. Donec scelerisque felis congue, ultricies ante efficitur, tempor sapien. Donec euismod lectus at ultrices mattis. Praesent ut dui arcu. Praesent viverra, eros a imperdiet consectetur, lectus magna efficitur purus, ut tincidunt lorem mi sit amet justo. Aenean eget interdum sem, id luctus metus. Nullam quam nunc, lobortis quis diam at, accumsan efficitur leo. Mauris efficitur erat et ligula euismod, eu interdum nunc luctus. Nam aliquet facilisis aliquet. Nunc sagittis enim sed sapien malesuada gravida. Curabitur nulla dui, vehicula eu laoreet non, imperdiet quis ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis tortor vestibulum nisi condimentum pretium. Pellentesque ut tincidunt quam. Duis accumsan ante in est consequat gravida. Fusce fringilla erat molestie diam tempor, at viverra turpis feugiat.

                </p>


                <ImageWrapper>
                    <Image src='https://fakeimg.pl/100x100/?text=put img' alt="putsell img" />
                    <PutsellDesc>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean rutrum sapien quis velit sagittis, ut porttitor tortor pharetra. Vestibulum pellentesque est ipsum, non commodo lectus interdum id. Maecenas bibendum, arcu eu suscipit pharetra, quam ipsum finibus nibh, nec pulvinar nulla est eget ante. Ut eu orci id velit imperdiet cursus. Nam cursus augue eget odio fringilla tempus. Duis tincidunt rutrum viverra. Sed a vestibulum orci. Nunc nunc lacus, maximus sit amet ligula at, posuere scelerisque lorem. Donec sed tortor sem. Vestibulum consectetur facilisis neque, vitae dignissim dolor varius non.

                        Sed tempor odio at congue mattis. Sed lectus nibh, fringilla sed laoreet a, aliquam in purus. Nunc suscipit feugiat commodo. Etiam vel tellus in nibh mollis auctor ac sed tellus. Sed dignissim ipsum vel est commodo facilisis. Mauris blandit lectus vel mauris tempus vestibulum. Suspendisse vel eleifend neque, pharetra luctus urna. Quisque consequat, est et sollicitudin elementum, mauris tortor facilisis elit, a pharetra quam tortor vitae erat. Vestibulum ante sapien, sollicitudin vel aliquet nec, facilisis a erat. Suspendisse suscipit vehicula orci feugiat lacinia. Praesent luctus bibendum sapien. Phasellus convallis sed sem sed dignissim. Sed dapibus luctus urna, condimentum porta urna finibus facilisis. Aliquam lacus enim, malesuada et placerat tincidunt, maximus at quam.

                        Praesent sed iaculis ipsum. Duis non tellus eu libero dictum suscipit nec et metus. Aliquam erat volutpat. Nam id pulvinar ex. Donec rutrum, lectus et pulvinar vehicula, quam tellus suscipit est, quis pretium nibh elit quis diam. Aliquam non condimentum mi. Curabitur egestas sodales leo eu gravida. Cras non leo lobortis, viverra velit vel, rutrum nibh. Donec gravida et ipsum ut consectetur. Ut pretium iaculis tellus nec facilisis. Aenean condimentum, tellus quis interdum aliquet, odio metus tincidunt felis, ut vulputate erat quam sit amet risus. Proin fermentum faucibus nulla, vel ultrices metus mattis sed. Mauris condimentum enim sit amet mauris hendrerit, quis pharetra ipsum malesuada. Integer maximus feugiat velit vitae dapibus.

                        Aenean cursus orci tortor, sit amet suscipit justo aliquam vitae. Duis tempor libero eu sapien vehicula finibus. Curabitur elementum purus porta ex molestie maximus. Donec auctor sit amet purus at egestas. Maecenas pulvinar pellentesque volutpat. Maecenas at urna non orci ultrices ullamcorper. Suspendisse a lacinia lorem. Pellentesque efficitur odio dolor, et iaculis risus lacinia eget. Nulla vel nibh eu libero convallis ullamcorper. Donec rhoncus ultricies ullamcorper. Curabitur vel feugiat velit. Duis nec suscipit mi, ut bibendum diam. Suspendisse facilisis at felis quis facilisis. Nullam vitae blandit tortor, non condimentum erat. Vestibulum nunc tortor, suscipit vitae tempor quis, luctus quis metus.

                        Maecenas sed leo sollicitudin, mollis dui convallis, interdum elit. Donec scelerisque felis congue, ultricies ante efficitur, tempor sapien. Donec euismod lectus at ultrices mattis. Praesent ut dui arcu. Praesent viverra, eros a imperdiet consectetur, lectus magna efficitur purus, ut tincidunt lorem mi sit amet justo. Aenean eget interdum sem, id luctus metus. Nullam quam nunc, lobortis quis diam at, accumsan efficitur leo. Mauris efficitur erat et ligula euismod, eu interdum nunc luctus. Nam aliquet facilisis aliquet. Nunc sagittis enim sed sapien malesuada gravida. Curabitur nulla dui, vehicula eu laoreet non, imperdiet quis ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis tortor vestibulum nisi condimentum pretium. Pellentesque ut tincidunt quam. Duis accumsan ante in est consequat gravida. Fusce fringilla erat molestie diam tempor, at viverra turpis feugiat.
                    </PutsellDesc>

                </ImageWrapper>

            </TextBox>

            <VideoWrapper>
                <h1>Selling Puts Tutorial</h1>
                <iframe title="Selling Puts Tutorial"
                    src='https://fakeimg.pl/600x400/?text=video'
                    height={`${vidHeight}px`}
                    width={`${vidWidth}px`}
                    allow="fullscreen" />
            </VideoWrapper>

        </Wrapper>
    )
}