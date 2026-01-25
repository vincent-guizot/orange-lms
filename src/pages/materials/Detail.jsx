import Swal from "sweetalert2";

const Detail = (material) => {
  if (!material) {
    Swal.fire({
      icon: "error",
      title: "No data",
      text: "Note data not found",
    });
    return;
  }

  Swal.fire({
    title: material.name,
    html: `
      <div class="text-left space-y-2">
        <p><strong>Materisl:</strong> ${material.name}</p>
        <p><strong>Link:</strong> ${material.link}</p>
        <hr />
        <div style="white-space: pre-line">
          ${material.content ? material.content : "No Content"}
        </div>
      </div>
    `,
    width: 600,
    confirmButtonText: "Close",
  });
};

export default Detail;
