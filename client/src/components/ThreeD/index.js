import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import "./threed.css";
import { Interaction } from "three.interaction";

export const ThreeD = ({
    geo = new THREE.BoxGeometry(5, 5, 5, 3),
    mat = new THREE.MeshStandardMaterial({ color: 0x90a2da }),
    duration = 5000,
    xRot = 0,
    yRot = 0,
    width = 130,
    height = 130,
}) => {
    const mountRef = useRef(null);
    const ambientRef = useRef(null);
    let [isAnimationStarted, setIsAnimatedStarted] = useState(true);
    let [xycoord, setXYCoord] = useState([0, 0]);

    useEffect(() => {
        let start;
        const scene = new THREE.Scene();
        let mountRefValue = null;
        const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: true });
        const interaction = new Interaction(renderer, scene, camera);
        mountRef.current.appendChild(renderer.domElement);

        if (mountRef.current) {
            mountRefValue = mountRef.current;
        }

        renderer.setSize(width, height);
        renderer.setClearColor(0x000000, 0);
        camera.position.setZ(20);

        //3D Shape created from passed in props
        const geometry = geo;
        const material = mat;
        const shape = new THREE.Mesh(geometry, material);
        scene.add(shape);


        //Lights

        const pointLight = new THREE.PointLight(0xffffff, 1);
        pointLight.position.set(5, 5, 5);

        const ambientLight = new THREE.AmbientLight(0xffffff, 2);
        scene.add(pointLight, ambientLight);

        //Interactions with shape
        shape.cursor = "pointer";
        shape.on("click", (ev) => {
            setIsAnimatedStarted(true);
            start = undefined;
        });
        shape.on('mouseover', (ev) => {
            if (ambientRef.current.children.length > 0) {
                ambientRef.current.children[0].style.backgroundColor = "#f5f562";
            }

        });
        shape.on('mouseout', (ev) => {

            if (ambientRef.current.children.length > 0) {
                ambientRef.current.children[0].style.backgroundColor = "transparent";
            }

        });


        const animate = (timestamp) => {
            if (start === undefined) {
                start = timestamp;
            }

            const elapsed = timestamp - start;

            if (elapsed < duration) {
                // previousTimeStamp = timestamp;
                window.requestAnimationFrame(animate);
            } else {
                setXYCoord([shape.rotation.x, shape.rotation.x]);
                setIsAnimatedStarted(false);
            }

            shape.rotation.x += xRot;
            shape.rotation.y += yRot;
            renderer.render(scene, camera);
        };

        if ((xRot > 0 || yRot > 0) && isAnimationStarted) {
            window.requestAnimationFrame(animate);
        } else {
            const xRot = xycoord[0];
            const yRot = xycoord[1];
            shape.rotation.x += xRot;
            shape.rotation.y += yRot;
            renderer.render(scene, camera);
        }

        return () => {
            mountRefValue.removeChild(renderer.domElement);
        };
    }, [isAnimationStarted]);

    return <div id="threed" ref={(el) => { mountRef.current = el; ambientRef.current = el; }}></div>;
};
