import styles from "./Controls.module.scss";

export function Controls({
	enabled,
	autoRefresh,
	onEnabledChange,
	onAutoRefreshChange,
	onFetchCat
}: {
	enabled: boolean;
	autoRefresh: boolean;
	onEnabledChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	onAutoRefreshChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	onFetchCat: () => void;
}) {
	return (
		<div className={styles.controls}>
			<div className={styles.checkbox}>
				<label>
					<input type="checkbox" checked={enabled} onChange={onEnabledChange} />
					Enabled
				</label>
			</div>

			<div className={styles.checkbox}>
				<label>
					<input
						type="checkbox"
						checked={autoRefresh}
						disabled={!enabled}
						onChange={onAutoRefreshChange}
					/>
					Auto-refresh every 5 seconds
				</label>
			</div>

			<button
				onClick={onFetchCat}
				disabled={!enabled}
				className={styles.button}
			>
				Get Cat
			</button>
		</div>
	);
}
