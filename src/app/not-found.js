export default function NotFound() {
  return (
<>
  <div style={{ textAlign: 'center', marginTop: '50vh', transform: 'translateY(-50%)' }}>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <p style={{ fontSize: '180px', fontFamily: 'Unbounded', fontWeight: 600, margin: '0 20px' }}>4</p>
      <img src="/404.svg" alt="404" style={{ width: '200px', height: '200px' }} />
      <p style={{ fontSize: '180px', fontFamily: 'Unbounded', fontWeight: 600, margin: '0 20px' }}>4</p>
    </div>
    <div>
      <p style={{ fontSize: '64px' }}>Упс...</p>
    </div>
    <div>
      <p style={{ fontSize: '48px' }}>Схоже, що сторінку не знайдено</p>
    </div>
  </div>
</>
  );
}
