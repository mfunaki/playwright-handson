import { test, expect } from '@playwright/test'

test('ページの表示テスト', async ({ page }) => {
    // ページを開く
    await page.goto('http://localhost:3000')

    // タイトルが正しいか確認
    await expect(page).toHaveTitle(/最初のページ/)

    // ヘッダーとボタンの存在を確認
    await expect(page.getByRole('heading')).toHaveText(/Playwrightのハンズオン/)
    await expect(page.getByRole('button', { name: /操作ボタン/ })).toBeVisible()
})