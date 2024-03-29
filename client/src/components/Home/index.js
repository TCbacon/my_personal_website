import React, { useEffect } from "react";
import { Wrapper, InfoBox, ExpList, MyImage } from "./Home.styles";
import Footer from "../Footer";
import "./home.css";
import { ThreeD } from "../ThreeD";
import { TorusGeometry, BoxGeometry, MeshStandardMaterial } from "three";
export const Home = () => {

    const textSlideAnimation = () => {

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                }
            }
            );
        });

        const hiddenElements = document.querySelectorAll(".hidden");
        hiddenElements.forEach((e) => observer.observe(e));
    };

    useEffect(() => {
        textSlideAnimation();
    }, []);
    return (
        <Wrapper>
            <InfoBox>
                <div>

                    <section className="hidden">
                        <h1>About Me</h1>

                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean rutrum sapien quis velit sagittis, ut porttitor tortor pharetra. Vestibulum pellentesque est ipsum, non commodo lectus interdum id. Maecenas bibendum, arcu eu suscipit pharetra, quam ipsum finibus nibh, nec pulvinar nulla est eget ante. Ut eu orci id velit imperdiet cursus. Nam cursus augue eget odio fringilla tempus. Duis tincidunt rutrum viverra. Sed a vestibulum orci. Nunc nunc lacus, maximus sit amet ligula at, posuere scelerisque lorem. Donec sed tortor sem. Vestibulum consectetur facilisis neque, vitae dignissim dolor varius non.

                            Sed tempor odio at congue mattis. Sed lectus nibh, fringilla sed laoreet a, aliquam in purus. Nunc suscipit feugiat commodo. Etiam vel tellus in nibh mollis auctor ac sed tellus. Sed dignissim ipsum vel est commodo facilisis. Mauris blandit lectus vel mauris tempus vestibulum. Suspendisse vel eleifend neque, pharetra luctus urna. Quisque consequat, est et sollicitudin elementum, mauris tortor facilisis elit, a pharetra quam tortor vitae erat. Vestibulum ante sapien, sollicitudin vel aliquet nec, facilisis a erat. Suspendisse suscipit vehicula orci feugiat lacinia. Praesent luctus bibendum sapien. Phasellus convallis sed sem sed dignissim. Sed dapibus luctus urna, condimentum porta urna finibus facilisis. Aliquam lacus enim, malesuada et placerat tincidunt, maximus at quam.
                        </p>

                    </section>



                    <ExpList>
                        <MyImage src="https://fakeimg.pl/300x300/?text=your img" alt="your img" />

                        <ThreeD
                            geo={new BoxGeometry(5, 5, 5, 3)}
                            mat={new MeshStandardMaterial({ color: 0x90a2da })}
                            duration={15000}
                            xRot={0.01}
                            yRot={0.01}
                        />

                        <section className="hidden">
                            <h3>Experiences</h3>
                            <li>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean rutrum sapien quis velit sagittis, ut porttitor tortor pharetra. Vestibulum pellentesque est ipsum, non commodo lectus interdum id. Maecenas bibendum, arcu eu suscipit pharetra, quam ipsum finibus nibh, nec pulvinar nulla est eget ante. Ut eu orci id velit imperdiet cursus. Nam cursus augue eget odio fringilla tempus. Duis tincidunt rutrum viverra. Sed a vestibulum orci. Nunc nunc lacus, maximus sit amet ligula at, posuere scelerisque lorem. Donec sed tortor sem. Vestibulum consectetur facilisis neque, vitae dignissim dolor varius non.

                                Sed tempor odio at congue mattis. Sed lectus nibh, fringilla sed laoreet a, aliquam in purus. Nunc suscipit feugiat commodo. Etiam vel tellus in nibh mollis auctor ac sed tellus. Sed dignissim ipsum vel est commodo facilisis. Mauris blandit lectus vel mauris tempus vestibulum. Suspendisse vel eleifend neque, pharetra luctus urna. Quisque consequat, est et sollicitudin elementum, mauris tortor facilisis elit, a pharetra quam tortor vitae erat. Vestibulum ante sapien, sollicitudin vel aliquet nec, facilisis a erat. Suspendisse suscipit vehicula orci feugiat lacinia. Praesent luctus bibendum sapien. Phasellus convallis sed sem sed dignissim. Sed dapibus luctus urna, condimentum porta urna finibus facilisis. Aliquam lacus enim, malesuada et placerat tincidunt, maximus at quam.

                                Praesent sed iaculis ipsum. Duis non tellus eu libero dictum suscipit nec et metus. Aliquam erat volutpat. Nam id pulvinar ex. Donec rutrum, lectus et pulvinar vehicula, quam tellus suscipit est, quis pretium nibh elit quis diam. Aliquam non condimentum mi. Curabitur egestas sodales leo eu gravida. Cras non leo lobortis, viverra velit vel, rutrum nibh. Donec gravida et ipsum ut consectetur. Ut pretium iaculis tellus nec facilisis. Aenean condimentum, tellus quis interdum aliquet, odio metus tincidunt felis, ut vulputate erat quam sit amet risus. Proin fermentum faucibus nulla, vel ultrices metus mattis sed. Mauris condimentum enim sit amet mauris hendrerit, quis pharetra ipsum malesuada. Integer maximus feugiat velit vitae dapibus.

                                Aenean cursus orci tortor, sit amet suscipit justo aliquam vitae. Duis tempor libero eu sapien vehicula finibus. Curabitur elementum purus porta ex molestie maximus. Donec auctor sit amet purus at egestas. Maecenas pulvinar pellentesque volutpat. Maecenas at urna non orci ultrices ullamcorper. Suspendisse a lacinia lorem. Pellentesque efficitur odio dolor, et iaculis risus lacinia eget. Nulla vel nibh eu libero convallis ullamcorper. Donec rhoncus ultricies ullamcorper. Curabitur vel feugiat velit. Duis nec suscipit mi, ut bibendum diam. Suspendisse facilisis at felis quis facilisis. Nullam vitae blandit tortor, non condimentum erat. Vestibulum nunc tortor, suscipit vitae tempor quis, luctus quis metus.

                                Maecenas sed leo sollicitudin, mollis dui convallis, interdum elit. Donec scelerisque felis congue, ultricies ante efficitur, tempor sapien. Donec euismod lectus at ultrices mattis. Praesent ut dui arcu. Praesent viverra, eros a imperdiet consectetur, lectus magna efficitur purus, ut tincidunt lorem mi sit amet justo. Aenean eget interdum sem, id luctus metus. Nullam quam nunc, lobortis quis diam at, accumsan efficitur leo. Mauris efficitur erat et ligula euismod, eu interdum nunc luctus. Nam aliquet facilisis aliquet. Nunc sagittis enim sed sapien malesuada gravida. Curabitur nulla dui, vehicula eu laoreet non, imperdiet quis ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis tortor vestibulum nisi condimentum pretium. Pellentesque ut tincidunt quam. Duis accumsan ante in est consequat gravida. Fusce fringilla erat molestie diam tempor, at viverra turpis feugiat.
                            </li>
                        </section>

                        <section className="hidden">
                            <h3>Technologies</h3>
                            <li>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean rutrum sapien quis velit sagittis, ut porttitor tortor pharetra. Vestibulum pellentesque est ipsum, non commodo lectus interdum id. Maecenas bibendum, arcu eu suscipit pharetra, quam ipsum finibus nibh, nec pulvinar nulla est eget ante. Ut eu orci id velit imperdiet cursus. Nam cursus augue eget odio fringilla tempus. Duis tincidunt rutrum viverra. Sed a vestibulum orci. Nunc nunc lacus, maximus sit amet ligula at, posuere scelerisque lorem. Donec sed tortor sem. Vestibulum consectetur facilisis neque, vitae dignissim dolor varius non.

                                Sed tempor odio at congue mattis. Sed lectus nibh, fringilla sed laoreet a, aliquam in purus. Nunc suscipit feugiat commodo. Etiam vel tellus in nibh mollis auctor ac sed tellus. Sed dignissim ipsum vel est commodo facilisis. Mauris blandit lectus vel mauris tempus vestibulum. Suspendisse vel eleifend neque, pharetra luctus urna. Quisque consequat, est et sollicitudin elementum, mauris tortor facilisis elit, a pharetra quam tortor vitae erat. Vestibulum ante sapien, sollicitudin vel aliquet nec, facilisis a erat. Suspendisse suscipit vehicula orci feugiat lacinia. Praesent luctus bibendum sapien. Phasellus convallis sed sem sed dignissim. Sed dapibus luctus urna, condimentum porta urna finibus facilisis. Aliquam lacus enim, malesuada et placerat tincidunt, maximus at quam.

                                Praesent sed iaculis ipsum. Duis non tellus eu libero dictum suscipit nec et metus. Aliquam erat volutpat. Nam id pulvinar ex. Donec rutrum, lectus et pulvinar vehicula, quam tellus suscipit est, quis pretium nibh elit quis diam. Aliquam non condimentum mi. Curabitur egestas sodales leo eu gravida. Cras non leo lobortis, viverra velit vel, rutrum nibh. Donec gravida et ipsum ut consectetur. Ut pretium iaculis tellus nec facilisis. Aenean condimentum, tellus quis interdum aliquet, odio metus tincidunt felis, ut vulputate erat quam sit amet risus. Proin fermentum faucibus nulla, vel ultrices metus mattis sed. Mauris condimentum enim sit amet mauris hendrerit, quis pharetra ipsum malesuada. Integer maximus feugiat velit vitae dapibus.

                                Aenean cursus orci tortor, sit amet suscipit justo aliquam vitae. Duis tempor libero eu sapien vehicula finibus. Curabitur elementum purus porta ex molestie maximus. Donec auctor sit amet purus at egestas. Maecenas pulvinar pellentesque volutpat. Maecenas at urna non orci ultrices ullamcorper. Suspendisse a lacinia lorem. Pellentesque efficitur odio dolor, et iaculis risus lacinia eget. Nulla vel nibh eu libero convallis ullamcorper. Donec rhoncus ultricies ullamcorper. Curabitur vel feugiat velit. Duis nec suscipit mi, ut bibendum diam. Suspendisse facilisis at felis quis facilisis. Nullam vitae blandit tortor, non condimentum erat. Vestibulum nunc tortor, suscipit vitae tempor quis, luctus quis metus.

                                Maecenas sed leo sollicitudin, mollis dui convallis, interdum elit. Donec scelerisque felis congue, ultricies ante efficitur, tempor sapien. Donec euismod lectus at ultrices mattis. Praesent ut dui arcu. Praesent viverra, eros a imperdiet consectetur, lectus magna efficitur purus, ut tincidunt lorem mi sit amet justo. Aenean eget interdum sem, id luctus metus. Nullam quam nunc, lobortis quis diam at, accumsan efficitur leo. Mauris efficitur erat et ligula euismod, eu interdum nunc luctus. Nam aliquet facilisis aliquet. Nunc sagittis enim sed sapien malesuada gravida. Curabitur nulla dui, vehicula eu laoreet non, imperdiet quis ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis tortor vestibulum nisi condimentum pretium. Pellentesque ut tincidunt quam. Duis accumsan ante in est consequat gravida. Fusce fringilla erat molestie diam tempor, at viverra turpis feugiat.
                            </li>
                        </section>

                        <section className="hidden">
                            <h3>Hobbies</h3>

                            <li>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean rutrum sapien quis velit sagittis, ut porttitor tortor pharetra. Vestibulum pellentesque est ipsum, non commodo lectus interdum id. Maecenas bibendum, arcu eu suscipit pharetra, quam ipsum finibus nibh, nec pulvinar nulla est eget ante. Ut eu orci id velit imperdiet cursus. Nam cursus augue eget odio fringilla tempus. Duis tincidunt rutrum viverra. Sed a vestibulum orci. Nunc nunc lacus, maximus sit amet ligula at, posuere scelerisque lorem. Donec sed tortor sem. Vestibulum consectetur facilisis neque, vitae dignissim dolor varius non.

                                Sed tempor odio at congue mattis. Sed lectus nibh, fringilla sed laoreet a, aliquam in purus. Nunc suscipit feugiat commodo. Etiam vel tellus in nibh mollis auctor ac sed tellus. Sed dignissim ipsum vel est commodo facilisis. Mauris blandit lectus vel mauris tempus vestibulum. Suspendisse vel eleifend neque, pharetra luctus urna. Quisque consequat, est et sollicitudin elementum, mauris tortor facilisis elit, a pharetra quam tortor vitae erat. Vestibulum ante sapien, sollicitudin vel aliquet nec, facilisis a erat. Suspendisse suscipit vehicula orci feugiat lacinia. Praesent luctus bibendum sapien. Phasellus convallis sed sem sed dignissim. Sed dapibus luctus urna, condimentum porta urna finibus facilisis. Aliquam lacus enim, malesuada et placerat tincidunt, maximus at quam.

                                Praesent sed iaculis ipsum. Duis non tellus eu libero dictum suscipit nec et metus. Aliquam erat volutpat. Nam id pulvinar ex. Donec rutrum, lectus et pulvinar vehicula, quam tellus suscipit est, quis pretium nibh elit quis diam. Aliquam non condimentum mi. Curabitur egestas sodales leo eu gravida. Cras non leo lobortis, viverra velit vel, rutrum nibh. Donec gravida et ipsum ut consectetur. Ut pretium iaculis tellus nec facilisis. Aenean condimentum, tellus quis interdum aliquet, odio metus tincidunt felis, ut vulputate erat quam sit amet risus. Proin fermentum faucibus nulla, vel ultrices metus mattis sed. Mauris condimentum enim sit amet mauris hendrerit, quis pharetra ipsum malesuada. Integer maximus feugiat velit vitae dapibus.

                                Aenean cursus orci tortor, sit amet suscipit justo aliquam vitae. Duis tempor libero eu sapien vehicula finibus. Curabitur elementum purus porta ex molestie maximus. Donec auctor sit amet purus at egestas. Maecenas pulvinar pellentesque volutpat. Maecenas at urna non orci ultrices ullamcorper. Suspendisse a lacinia lorem. Pellentesque efficitur odio dolor, et iaculis risus lacinia eget. Nulla vel nibh eu libero convallis ullamcorper. Donec rhoncus ultricies ullamcorper. Curabitur vel feugiat velit. Duis nec suscipit mi, ut bibendum diam. Suspendisse facilisis at felis quis facilisis. Nullam vitae blandit tortor, non condimentum erat. Vestibulum nunc tortor, suscipit vitae tempor quis, luctus quis metus.

                                Maecenas sed leo sollicitudin, mollis dui convallis, interdum elit. Donec scelerisque felis congue, ultricies ante efficitur, tempor sapien. Donec euismod lectus at ultrices mattis. Praesent ut dui arcu. Praesent viverra, eros a imperdiet consectetur, lectus magna efficitur purus, ut tincidunt lorem mi sit amet justo. Aenean eget interdum sem, id luctus metus. Nullam quam nunc, lobortis quis diam at, accumsan efficitur leo. Mauris efficitur erat et ligula euismod, eu interdum nunc luctus. Nam aliquet facilisis aliquet. Nunc sagittis enim sed sapien malesuada gravida. Curabitur nulla dui, vehicula eu laoreet non, imperdiet quis ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis tortor vestibulum nisi condimentum pretium. Pellentesque ut tincidunt quam. Duis accumsan ante in est consequat gravida. Fusce fringilla erat molestie diam tempor, at viverra turpis feugiat.
                            </li>
                        </section>

                        <ThreeD
                            geo={new TorusGeometry(4, 2, 10, 50)}
                            mat={new MeshStandardMaterial({ color: 0xfd8ebb })}
                            duration={15000}
                            xRot={0.01}
                            yRot={0.01}
                        />

                    </ExpList>

                </div>
            </InfoBox>

            <Footer />

        </Wrapper>

    );
};