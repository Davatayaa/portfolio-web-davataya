import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeBackground = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const currentMount = mountRef.current;
    
    let scene, camera, renderer, particles, mouseX = 0, mouseY = 0;
    const clock = new THREE.Clock();
    let frameId;

    function init3D() {
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(75, currentMount.clientWidth / currentMount.clientHeight, 0.1, 1000);
      camera.position.z = 300;

      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
      currentMount.appendChild(renderer.domElement);
      
      const particleCount = 5000;
      const positions = new Float32Array(particleCount * 3);
      const scales = new Float32Array(particleCount);
      let i = 0, j = 0;
      for (let ix = 0; ix < 50; ix++) {
          for (let iy = 0; iy < 100; iy++) {
              positions[i] = ix * 10 - ((50 * 10) / 2);
              positions[i + 1] = 0;
              positions[i + 2] = iy * 10 - ((100 * 10) / 2);
              scales[j] = 1;
              i += 3;
              j++;
          }
      }

      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      geometry.setAttribute('scale', new THREE.BufferAttribute(scales, 1));
      
      const material = new THREE.PointsMaterial({
        color: 0x38BDF8,
        size: 1.5,
        transparent: true,
        blending: THREE.AdditiveBlending,
        sizeAttenuation: true
      });

      particles = new THREE.Points(geometry, material);
      scene.add(particles);
      scene.rotation.x = -1.2;
    }

    function onMouseMove(event) {
      mouseX = event.clientX - window.innerWidth / 2;
      mouseY = event.clientY - window.innerHeight / 2;
    }
    
    function onWindowResize() {
      camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    }
    
    function animate() {
      frameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();
      
      const positions = particles.geometry.attributes.position.array;
      const scales = particles.geometry.attributes.scale.array;
      let i = 0, j = 0;
      for (let ix = 0; ix < 50; ix++) {
          for (let iy = 0; iy < 100; iy++) {
              positions[i + 1] = (Math.sin((ix + elapsedTime) * 0.3) * 20) + (Math.sin((iy + elapsedTime) * 0.5) * 20);
              scales[j] = (Math.sin((ix + elapsedTime) * 0.3) + 1) * 2 + (Math.sin((iy + elapsedTime) * 0.5) + 1) * 2;
              i += 3;
              j++;
          }
      }
      particles.geometry.attributes.position.needsUpdate = true;
      particles.geometry.attributes.scale.needsUpdate = true;
      
      camera.position.x += (mouseX - camera.position.x) * .05;
      camera.position.y += (-mouseY - camera.position.y) * .05;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    }
    
    init3D();
    animate();
    
    document.addEventListener('mousemove', onMouseMove);
    window.addEventListener('resize', onWindowResize);

    return () => {
      cancelAnimationFrame(frameId);
      document.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onWindowResize);
      currentMount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="fixed inset-0 z-0 opacity-20" />;
};

export default ThreeBackground;