import * as Constants from "../utils/Constants";

export default function AboutPage() {
  return (
    <>
      <section>
        <article>
          <h1>{Constants.DANY}</h1>
          <p>*Le gusta agarrarse a jetazos con los moteros*</p>
        </article>
        <article>
          <h1>{Constants.ANDRES}</h1>
          <p>*Le hace mantenimiento a la moto sin falta*</p>
        </article>
        <article>
          <h1>{Constants.HECTOR}</h1>
          <p>*Le pone más trabajo a todos*</p>
        </article>
      </section>
    </>
  );
}
