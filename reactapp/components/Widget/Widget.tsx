import styles from "./Widget.module.scss";

export default function CsWidget({
  title,
  children,
  padBody,
}: {
  title: string;
  children: React.ReactNode;
  padBody?: boolean;
}) {
  if (padBody === undefined) padBody = true;

  return (
    <div className={`${styles.container} shadow`}>
      <div className={styles.header}>
        <h3 className={styles.title}>{title}</h3>
      </div>
      <div className={`${styles.body} ${padBody ? styles.padBody : ""}`}>
        {children}
      </div>
    </div>
  );
}
