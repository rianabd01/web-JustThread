import React from 'react';

export default function LoginInput() {
  return (
    <form action="submit" spellCheck="false">
      <input type="email" placeholder="Masukkan Email" />
      <input type="password" placeholder="Masukkan Kata Sandi" />
      <button type="submit">Log in</button>
    </form>
  );
}
