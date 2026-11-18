import './Profile.css'

function Profile({ user, isFollowing, onFollow, onBack }) {
  return (
    <main className="profile">
      <button
        className="profile__back"
        type="button"
        onClick={onBack}
      >
        ← Voltar
      </button>

      <section className="profile__header">
        <img
          className="profile__avatar"
          src={user.avatar}
          alt={`Foto de ${user.username}`}
        />

        <div className="profile__info">
          <div className="profile__top">
            <h1>@{user.username}</h1>

            <button
              type="button"
              onClick={onFollow}
              className={isFollowing ? 'following' : ''}
            >
              {isFollowing ? 'Seguindo' : 'Seguir'}
            </button>
          </div>

          <div className="profile__stats">
            <span>
              <strong>{user.followers}</strong> seguidores
            </span>

            <span>
              <strong>{user.following}</strong> seguindo
            </span>
          </div>

          <strong>{user.name}</strong>

          <p>{user.bio}</p>
        </div>
      </section>
    </main>
  )
}

export default Profile