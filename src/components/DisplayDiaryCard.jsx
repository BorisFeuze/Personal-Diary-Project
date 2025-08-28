import { useMemo, useState } from "react";

const LS_KEY = "diaryList";

const DisplayDiaryCard = ({ diaries, setDiaries }) => {
  const [active, setActive] = useState(null); // for detail view

  // Delete one diary (updates parent state + localStorage)
  const handleDelete = (id) => {
    if (!confirm("Delete this diary?")) return;
    const next = diaries.filter((d) => d._id !== id);
    setDiaries(next);
    localStorage.setItem(LS_KEY, JSON.stringify(next));
    if (active?._id === id) setActive(null);
  };

  // Sort newest-first
  const sorted = useMemo(() => {
    return [...diaries].sort((a, b) => {
      const ta = a.newDate ? new Date(a.newDate).getTime() : a._id || 0;
      const tb = b.newDate ? new Date(b.newDate).getTime() : b._id || 0;
      return tb - ta;
    });
  }, [diaries]);

  return (
    <section className="space-y-6">
      <h2 className="text-xl font-semibold text-black">Your Diaries</h2>

      {!sorted.length ? (
        <div className="text-center text-black/60 py-10">
          No diaries yet. Add one to see it here.
        </div>
      ) : (
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sorted.map((d) => (
            <li
              key={d._id}
              className="card bg-white text-black border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
            >
              {d.imgUrl ? (
                <figure className="aspect-[16/9] overflow-hidden">
                  <img
                    src={d.imgUrl}
                    alt={d.title}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </figure>
              ) : null}

              <div className="card-body">
                <div className="flex items-start justify-between gap-2">
                  <button
                    className="card-title text-left text-lg hover:underline"
                    onClick={() => setActive(d)}
                    title="See details"
                  >
                    {d.title || "(Untitled)"}
                  </button>
                </div>

                <p className="text-sm text-gray-500">
                  {d.newDate ? new Date(d.newDate).toLocaleDateString() : ""}
                </p>

                <p className="mt-2 text-sm">
                  {d.message?.length > 140
                    ? d.message.slice(0, 140) + "…"
                    : d.message}
                </p>

                <div className="card-actions mt-4 justify-end">
                  <button
                    className="btn btn-sm btn-error text-white"
                    onClick={() => handleDelete(d._id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}

      {/* Detail modal */}
      {active && (
        <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4">
          <div className="max-w-2xl w-full bg-white text-black rounded-xl shadow-lg">
            <div className="p-4 border-b flex items-center justify-between">
              <h3 className="text-lg font-semibold">{active.title}</h3>
              <button
                className="btn btn-sm btn-ghost"
                onClick={() => setActive(null)}
              >
                ✖
              </button>
            </div>

            {active.imgUrl ? (
              <img
                src={active.imgUrl}
                alt={active.title}
                className="w-full max-h-[50vh] object-cover"
              />
            ) : null}

            <div className="p-4 space-y-2">
              <div className="text-sm text-gray-600">
                {active.newDate
                  ? new Date(active.newDate).toLocaleDateString()
                  : ""}
              </div>
              <p className="whitespace-pre-wrap leading-relaxed">
                {active.message}
              </p>
            </div>

            <div className="p-4 border-t flex justify-end gap-2">
              <button className="btn" onClick={() => setActive(null)}>
                Close
              </button>
              <button
                className="btn btn-error text-white"
                onClick={() => handleDelete(active._id)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default DisplayDiaryCard;
