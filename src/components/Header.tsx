function Header() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-1 leading-none">
        <h1 className="text-3xl font-bold">Dmitry Yastkevich</h1>
        <h2 className="text-xl text-gradient-primary">Frontend Developer</h2>
      </div>
      <div className="quote flex flex-col gap-1 leading-none">
        <blockquote>
          <p className="leading-tight">
            Life is what happens when you're busy making other plans.
          </p>
        </blockquote>
        <span className="text-sm text-gray-light">John Lennon</span>
      </div>
    </div>
  );
}

export default Header;
