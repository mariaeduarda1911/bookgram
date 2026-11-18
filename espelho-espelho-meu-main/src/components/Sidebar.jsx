import users from '../data/users.json'
import './Sidebar.css'

function Sidebar({ following, onFollow, onUserClick }) {
  return (
    <aside className="sidebar">

      <div className="sidebar__profile">
        <img
          src="/images/gatobabando.jpg"
          alt="Foto do seu perfil"
        />

        <div>
          <strong>@bookbyme</strong>
          <span>Anônima</span>
        </div>
      </div>

      <div className="sidebar__title">
        <span>Sugestões para você</span>

        <button type="button">
          Ver tudo
        </button>
      </div>

      <div className="sidebar__users">

        {users.map((user) => {
          const isFollowing = following.includes(user.id)

          return (
            <div className="suggestion" key={user.id}>

              <button
                className="suggestion__user"
                type="button"
                onClick={() => onUserClick(user)}
              >
                <img
                  src={user.avatar}
                  alt={`Foto de ${user.username}`}
                />

                <span>
                  <strong>@{user.username}</strong>
                  <small>{user.name}</small>
                </span>
              </button>

              <button
                className={`suggestion__follow ${
                  isFollowing ? 'following' : ''
                }`}
                type="button"
                onClick={() => onFollow(user.id)}
              >
                {isFollowing ? 'Seguindo' : 'Seguir'}
              </button>

            </div>
          )
        })}

      </div>

    </aside>
  )
}

export default Sidebar