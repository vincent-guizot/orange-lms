import Swal from "sweetalert2";

const Detail = (task) => {
  if (!task) {
    Swal.fire({
      icon: "error",
      title: "No data",
      text: "Task data not found",
    });
    return;
  }

  Swal.fire({
    title: task.name,
    html: `
      <div class="text-left space-y-2">
        <p><strong>Task:</strong> ${task.name}</p>
        <p><strong>Link:</strong> ${task.link}</p>
        <hr />
        <div style="white-space: pre-line">
          ${task.content ? task.content : "No Content"}
        </div>
      </div>
    `,
    width: 600,
    confirmButtonText: "Close",
  });
};

export default Detail;
