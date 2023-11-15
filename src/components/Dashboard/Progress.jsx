
function Progress() {
  return (
<div className="d-flex">
      <div className="d-flex flex-column justify-content-between me-4 text-end">
        <p className="text-secondary small">10 Menit yang lalu</p>
        <p className="text-secondary small">30 Menit yang lalu</p>
        <p className="text-secondary small">7 Jam yang lalu</p>
        <p className="text-secondary small">1 Hari yang lalu</p>
      </div>
      <div style={{marginRight:'16px'}} className="w-8 d-flex flex-column justify-content-between align-items-center">
        <div style={{width:'32px', height: '32px'}} className="d-flex align-items-center justify-content-center rounded bg-primary p-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
          </svg>

        </div>
        <div style={{height:'32px'}} className="border border-success" />
        <div style={{width:'32px', height: '32px'}} className="d-flex align-items-center justify-content-center rounded bg-success p-2">
          <svg
            className="w-4 h-4 text-white"
            fill="none"
            height="24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <div style={{height:'32px'}} className="border border-success" />
        <div style={{width:'32px', height: '32px'}} className="d-flex align-items-center justify-content-center rounded bg-white border p-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
          </svg>

        </div>
        <div style={{height:'32px'}} className="border border-success" />
        <div style={{width:'32px', height: '32px'}} className="d-flex align-items-center justify-content-center rounded bg-danger  p-2">
          <svg
            className="w-4 h-4 text-white"
            fill="none"
            height="24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M3 6h18" />
            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
          </svg>
        </div>
      </div>
      <div className="d-flex flex-column justify-content-between ms-4">
        <p className="text-dark">Berita Berhasil Diterbitkan</p>
        <p className="text-dark">Keluhan selesai</p>
        <p className="text-dark">Komentar yang dibalas</p>
        <p className="text-dark">Menghapus Berita</p>
      </div>
    </div>
  )
}

export default Progress