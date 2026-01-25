import Swal from "sweetalert2";

const Detail = (note) => {
  if (!note) {
    Swal.fire({
      icon: "error",
      title: "No data",
      text: "Note data not found",
    });
    return;
  }

  Swal.fire({
    title: note.name,
    html: `
      <div class="text-left space-y-2">
        <p><strong>Note:</strong> ${note.name}</p>
        <p><strong>Link:</strong> ${note.link}</p>
        <hr />
        <div style="white-space: pre-line">
          ${note.content ? note.content : "No Content"}
        </div>
      </div>
    `,
    width: 600,
    confirmButtonText: "Close",
  });
};

export default Detail;
