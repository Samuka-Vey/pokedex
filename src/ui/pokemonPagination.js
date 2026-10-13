const pagination = document.querySelector("#pagination");

export function renderPagination(
    totalPages,
    currentPage,
    onPageChange
) {
    pagination.replaceChildren();

    if (totalPages <= 1) return;

    const previousButton = document.createElement("button");

    previousButton.textContent = "Anterior";
    previousButton.disabled = currentPage === 1;

    previousButton.className = `
        rounded-lg bg-slate-700 px-4 py-2 text-white
        transition hover:bg-slate-600
        disabled:cursor-not-allowed disabled:opacity-40
    `;

    previousButton.addEventListener("click", () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    });

    const pageInfo = document.createElement("span");

    pageInfo.textContent =
        `Página ${currentPage} de ${totalPages}`;

    pageInfo.className = "text-white";

    const nextButton = document.createElement("button");

    nextButton.textContent = "Próxima";
    nextButton.disabled = currentPage === totalPages;

    nextButton.className = `
        rounded-lg bg-slate-700 px-4 py-2 text-white
        transition hover:bg-slate-600
        disabled:cursor-not-allowed disabled:opacity-40
    `;

    nextButton.addEventListener("click", () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    });

    pagination.append(
        previousButton,
        pageInfo,
        nextButton
    );
}