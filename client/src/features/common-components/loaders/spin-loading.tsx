export const SpinLoading = (props: {}) => {
    return (
        // créer un loader -> ajouter au component -> utiliser suspense(lire la doc) -> ajouter les articles sur le côté
      <div className="w-9 h-9">
        <div className="animate-spin"></div> 
      </div>
    );
};