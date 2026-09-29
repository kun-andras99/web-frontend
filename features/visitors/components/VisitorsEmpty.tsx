export default function VisitorsEmpty() {
    return (
        <div className="flex min-h-[220px] items-center justify-center rounded-2xl border border-white/8 bg-white/[0.03] px-5">
            <div className="text-center">
                <div className="mb-3 text-4xl">👀</div>

                <p className="text-sm font-medium text-white/75">
                    Még senki nem nézte meg a profilodat.
                </p>

                <p className="mt-1 text-xs text-white/35">
                    Ha valaki meglátogatja a profilodat, itt fog megjelenni.
                </p>
            </div>
        </div>
    );
}
