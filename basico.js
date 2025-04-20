document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");
  const closeModal = document.getElementById("close-modal");
  const finalizeBtn = document.getElementById("finalize-btn");
  const slidesContainer = document.querySelector(".modal-content");

  const lessons = [
      {
          id: "slide-1",
          title: "Introducción",
          description: "Bienvenido a las lecciones básicas. Aquí aprenderás los primeros acordes.",
          buttons: [{ text: "Iniciar", action: "next", target: "slide-2" }]
      },
      {
          id: "slide-2",
          title: "Lección 1: Acorde Do Mayor",
          description: "Coloca tus dedos de la siguiente manera...",
          images: ["acorde_do.png", "acorde_do_variacion.png"],
          audio: "do_mayor.mp3",
          advice: "Consejo: Practica despacio hasta dominarlo.",
          buttons: [
              { text: "Anterior", action: "prev", target: "slide-1" },
              { text: "Siguiente", action: "next", target: "slide-3" }
          ]
      },
      {
          id: "slide-3",
          title: "Lección 2: Acorde Re Mayor",
          description: "Coloca tus dedos de la siguiente manera...",
          images: ["acorde_re.png", "acorde_re_variacion.png"],
          audio: "re_mayor.mp3",
          advice: "Consejo: Presiona con firmeza, pero relaja los dedos para evitar tensión.",
          buttons: [
              { text: "Anterior", action: "prev", target: "slide-2" },
              { text: "Siguiente", action: "next", target: "slide-4" }
          ]
      },
      {
          id: "slide-4",
          title: "¡Felicidades!",
          description: "Has completado esta lección. Sigue practicando para avanzar al siguiente nivel.",
          buttons: [{ text: "Finalizar", action: "close" }]
      }
  ];

  // Crear diapositivas dinámicamente
  function createSlides(lessons) {
      lessons.forEach(lesson => {
          const slide = document.createElement("div");
          slide.id = lesson.id;
          slide.className = "slide hidden";

          // Título
          const title = document.createElement("h2");
          title.textContent = lesson.title;
          slide.appendChild(title);

          // Descripción
          const description = document.createElement("p");
          description.textContent = lesson.description;
          slide.appendChild(description);

          // Imágenes
          if (lesson.images) {
              lesson.images.forEach(imgSrc => {
                  const img = document.createElement("img");
                  img.src = imgSrc;
                  img.alt = lesson.title;
                  slide.appendChild(img);
              });
          }

          // Audio
          if (lesson.audio) {
              const audio = document.createElement("audio");
              audio.controls = true;
              const source = document.createElement("source");
              source.src = lesson.audio;
              source.type = "audio/mpeg";
              audio.appendChild(source);
              slide.appendChild(audio);
          }

          // Consejos
          if (lesson.advice) {
              const advice = document.createElement("p");
              advice.textContent = lesson.advice;
              slide.appendChild(advice);
          }

          // Botones
          lesson.buttons.forEach(buttonConfig => {
              const button = document.createElement("button");
              button.textContent = buttonConfig.text;
              button.addEventListener("click", () => {
                  if (buttonConfig.action === "next") {
                      showSlide(buttonConfig.target);
                  } else if (buttonConfig.action === "prev") {
                      showSlide(buttonConfig.target);
                  } else if (buttonConfig.action === "close") {
                      modal.classList.add("hidden");
                  }
              });
              slide.appendChild(button);
          });

          slidesContainer.appendChild(slide);
      });
  }

  // Mostrar diapositivas
  function showSlide(slideId) {
      document.querySelectorAll(".slide").forEach(slide => slide.classList.add("hidden"));
      document.getElementById(slideId).classList.remove("hidden");
  }

  // Inicializar modal y diapositivas
  document.querySelectorAll(".btn-2").forEach(button => {
      button.addEventListener("click", () => {
          modal.classList.remove("hidden");
          showSlide("slide-1"); // Mostrar diapositiva inicial
      });
  });
  closeModal.addEventListener("click", () => modal.classList.add("hidden"));
  finalizeBtn.addEventListener("click", () => modal.classList.add("hidden"));

  createSlides(lessons); // Generar diapositivas dinámicamente
});